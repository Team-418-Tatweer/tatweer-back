declare interface NotificationI {
	title: string;
	body: string;
	user: Types.ObjectId;
	imageUrl?: string;
	expiresAt?: Date;
}
