import { isAbsolute } from "path";
import { BookRepositoryInterface } from "../dataAccess/bookRepositoryInterface";
import { BookService } from "./bookService";
import { Book } from "@prisma/client";

const mockBookRepository: jest.Mocked<BookRepositoryInterface> = {
  create: jest.fn(),
  findById: jest.fn(),
};

describe('BookService', () => {
  let bookService: BookService;

  beforeEach(() => {
    bookService = new BookService(mockBookRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('書籍の登録が成功する', async () => {
    const newBook: Book = {
      id: '1',
      title: 'テストブック',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockBookRepository.create.mockResolvedValue(newBook);
    
    const result = await bookService.add('テストブック');

    expect(result).toEqual(newBook);
    expect(mockBookRepository.create).toHaveBeenCalledWith('テストブック');
  })

  it('書籍1件の取得が成功する', async () => {
    // idどうするか
    const newBook: Book = {
      id: '1',
      title: 'テストブック',
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // bookServiceのfindByIdが呼ばれる
    mockBookRepository.findById.mockResolvedValue(newBook);
    // 呼ばれたfindByIdが正しいidを引数に呼び出す
    const result = await bookService.findById('1');
    // findByIdが返した値がbookServiceの返り値になる
    expect(result).toEqual(newBook);
    expect(mockBookRepository.findById).toHaveBeenCalledWith('1');
  })
});
