import { SetMetadata } from '@nestjs/common';
import { RoleEnum } from '../constants/enums/role.enum';
import constants from '../constants/constants';

export const Roles = (...roles: RoleEnum[]) =>
  SetMetadata(constants.ROLES_KEY, roles);
