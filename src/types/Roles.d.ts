declare interface DiscordRoleI {
    /**
     * Role id
     */
    id: string;
    /**
     * Role name
     */
    name: string;
    /**
     * Integer representation of hexadecimal color code
     */
    color: number;
    /**
     * If this role is pinned in the user listing
     */
    /**
     * The role icon hash
     */
    icon?: string | null;
}
