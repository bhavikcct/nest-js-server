import { IsString, IsNotEmpty, IsDateString, IsIn ,IsOptional} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsIn(['To Do', 'In Progress', 'Completed'])
  status: string;

  @IsDateString()
  due_date: string;
}


export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsIn(['To Do', 'In Progress', 'Completed'])
  @IsOptional()
  status?: string;

  @IsDateString()
  @IsOptional()
  due_date?: string;
}