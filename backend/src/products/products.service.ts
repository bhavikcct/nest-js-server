import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(userId: number, search?: string) {
    const where: any = { user: { id: userId } };

    if (search) {
      where.productName = Like(`%${search}%`);
    }

    const products = await this.productsRepository.find({ where });

    return {
      message: 'Products fetched successfully',
      data: products,
    };
  }

  async create(createProductDto: CreateProductDto, userId: number) {
    const product = this.productsRepository.create({
      ...createProductDto,
      user: { id: userId },
    });
    const savedProduct = await this.productsRepository.save(product);

    return {
      message: 'Product created successfully',
      data: savedProduct,
    };
  }

  async update(id: number, updateProductDto: UpdateProductDto, userId: number) {
    const product = await this.productsRepository.findOne({ where: { id, user: { id: userId } } });
    if (!product) throw new NotFoundException('Product not found');

    Object.assign(product, updateProductDto);
    const updatedProduct = await this.productsRepository.save(product);

    return {
      message: 'Product updated successfully',
      data: updatedProduct,
    };
  }

  async findOne(id: number, userId: number) {
    const product = await this.productsRepository.findOne({ where: { id, user: { id: userId } } });
    if (!product) throw new NotFoundException('Product not found');

    return {
      message: 'Product fetched successfully',
      data: product,
    };
  }

  async remove(id: number, userId: number) {
    const product = await this.productsRepository.findOne({ where: { id, user: { id: userId } } });
    if (!product) throw new NotFoundException('Product not found');

    await this.productsRepository.remove(product);

    return {
      message: 'Product deleted successfully',
    };
  }
}
