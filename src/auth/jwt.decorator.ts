/*
 * @Author: chenchen
 * @Date: 2023-09-20 16:18:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-20 16:26:06
 */
import { SetMetadata } from '@nestjs/common/decorators';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
