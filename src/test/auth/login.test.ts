import { describe, expect, test } from '@jest/globals'
import request from 'supertest'
import { HttpCodes, ExitCodes } from '@config/Errors'
import { authLogs } from '@modules/auth/service/auth.logs'

import {  app } from '../../app'
import { formatString } from '@utils/Strings'
import { RandomEmail, RandomString } from '@utils/Function'
import System from '../../settings'
import { createUserFactory } from '@models/user'


afterAll(async () => {await System.Stop()})
beforeAll(async () => {await System.Start()})
beforeEach(async () => await System.Clear());


const route = '/auth/login'

/**
 * @description  Test the login route
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @route {POST} /auth/login
 *
 *
 */

describe('Test the Login with valid email and password', () => {
    test('It should response with Success response', async () => {
        await createUserFactory({ role: 'user' , password: 'password' , email: 'js_zouambia@esi.dz' });
        const response = await request(app).post(route).send({
            email: 'js_zouambia@esi.dz',
            password: 'password',
        })
        expect(response.status).toBe(HttpCodes.Accepted.code)
        expect(response.body.status).toBe(authLogs.LOGIN_SUCCESS.type)
        expect(response.body.message).toBe(
            formatString(authLogs.LOGIN_SUCCESS.message, response.body.data)
        )
        expect(response.body.data).toHaveProperty('token')
    })
})

describe("Test login with email doesn't exist", () => {
    test('It should responce with Error response type : LOGIN_ERROR_EMAIL_NOT_FOUND ', async () => {
        const email = RandomEmail()
        const response = await request(app).post(route).send({
            email: email,
            password: 'password',
        })
        expect(response.status).toBe(HttpCodes.NotFound.code)
        expect(response.body.status).toBe('error')
        expect(response.body.message).toBe(
            authLogs.LOGIN_ERROR_EMAIL_NOT_FOUND.type
        )
        expect(response.body.error).toBe(
            formatString(authLogs.LOGIN_ERROR_EMAIL_NOT_FOUND.message, {
                email,
            })
        )
    })
})
describe('Test login with email existe and invalid password', () => {
    test('It should response with Error response type : ERROR_INVALID_INPUT ', async () => {
        await createUserFactory({ role: 'user' , password: 'password' , email: 'js_zouambia@esi.dz' });
        const response = await request(app).post(route).send({
            email: 'js_zouambia@esi.dz',
            password: RandomString(),
        })
        expect(response.status).toBe(HttpCodes.Unauthorized.code)
        expect(response.body.status).toBe('error')
        expect(response.body.error).toBe(
            formatString(
                authLogs.LOGIN_ERROR_INCORRECT_PASSWORD_FOUND.message,
                {
                    email: 'js_zouambia@esi.dz',
                }
            )
        )
    })
})

describe('Test login route with invalid inputs', () => {
    test('It should response with Error response type : ERROR_INVALID_INPUT ', async () => {
        const response = await request(app).post(route).send({
            email: RandomEmail(),
        })
        expect(response.status).toBe(HttpCodes.BadRequest.code)
        expect(response.body.status).toBe('error')
        expect(response.body.message).toBe(ExitCodes.ERROR_INVALID_INPUT.type)
        expect(response.body.error).toContain('Password is required')
    })
})
