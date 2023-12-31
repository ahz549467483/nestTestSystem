import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('文本内容')
@Controller('content')
export class ContentController {
	constructor(private readonly contentService: ContentService) {}

	@ApiOperation({ summary: '创建' })
	@Post()
	create(@Body() createContentDto: CreateContentDto) {
		return this.contentService.create(createContentDto);
	}

	@Get()
	findAll() {
		return this.contentService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.contentService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
		return this.contentService.update(+id, updateContentDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.contentService.remove(+id);
	}
}
