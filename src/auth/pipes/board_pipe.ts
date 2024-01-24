import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../auth.model";

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC,
  ]

  transform(value: any) {
      value = value.toUpperCase();
      if (!this.isStatusValid(value)) {
        throw new BadRequestException('올바르지 못한 게시물입니다. status = ${value}')
      }
      return value;
  }

  private isStatusValid(status : any) {
  return this.StatusOptions.indexOf(status) != -1;
}
}