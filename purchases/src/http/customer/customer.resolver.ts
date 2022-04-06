import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from '../auth/authorization.guard';

@Resolver()
export class CustomerResolver {
  constructor(private prisma: PrismaService) { }

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  list() {
    return 'Hello customers';
  }
}
