import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './auth.model';
import { CreateBoardDto } from 'src/DTO/Create_Board.dto';

  @Injectable()
  export class AuthService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
      return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
      const { title, description } = createBoardDto;
    }
    const board: Board = {
      title,
      description,
      status: BoardStatus.PUBLIC
    }
    this.boards.push(board);
return board;
  }

getBoardById(id : string) : Board {
  const found = this.boards.find(board => board.id === id);
  if (!found) {
    throw new NotFoundException('해당 게시글이 존재하지 않습니다. id=${id');
  }
  return found;
}

updateBoardStatus(id : string, status : BoardStatus) : Board {
  const board = this.getBoardById(id);
  board.status = status;
  return board;
}

deleteBoard(id : string) : void {
  const found = this.getBoardBYId(id);
  this.boards = this.boards.filter(board => board.id !== found.id);
}
