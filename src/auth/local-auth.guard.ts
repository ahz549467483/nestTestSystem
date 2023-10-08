/*
 * @Author: chenchen
 * @Date: 2023-09-19 16:37:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-19 16:38:44
 */
import { AuthGuard } from '@nestjs/passport';
export class LocalAuthGuard extends AuthGuard('local') {}
