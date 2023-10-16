import { ApiProperty } from '@nestjs/swagger';
export class CreateContentDto {
	@ApiProperty({ description: 'json字符串内容' })
	content: string;
}
