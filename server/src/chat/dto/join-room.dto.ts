import { IsString, IsAlphanumeric, IsNumberString } from "class-validator";

export class JoinRoomDTO 
{
	@IsNumberString()
	readonly id: string;

	@IsString()
	readonly password: string;
}