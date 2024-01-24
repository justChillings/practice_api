import { Controller, Body, Post, Delete, HttpCode, HttpStatus, Param, ValidationPipe, UsePipes, Patch, ParseUUIDPipe, ParseIntPipe, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateBoardDto } from 'src/DTO/Create_Board.dto';
import { Board, BoardStatus } from './auth.model';
import { BoardStatusValidationPipe } from './pipes/board_pipe';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) { }

  @Get()
  getAllBoards(): Board[] {
    return this.authservice.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.authservice.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(
    @Param('id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string): Board {
    return this.authservice.getBoardById(id);
  }
  @Patch('/id/status')
  updateBoardStatus(@Param('id', ParseUUIDPipe) id: string, @Body('status', BoardStatusValidationPipe) status: BoardStatus): Board {
    return this.authservice.updateBoardStatus(id, status);
  }
  @Delete(':/id')
  @HttpCode(204)
  deleteBoard(@Param('id', ParseUUIDPipe) id : string) : void {
    this.authservice.deleteBoard(id);
  }
}
