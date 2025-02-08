//* note: informations about integration itslef marahich stored hna, hadi related to user data of integration
//* basically this is just a record that tells: "YES, the user has this integration"
declare interface IntegrationI {
    name: string
    isActive: boolean
    settings: any
}
