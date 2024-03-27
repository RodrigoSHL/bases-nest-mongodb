import { Optional } from '@nestjs/common';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @Optional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  offset: number;
}
