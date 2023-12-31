import prismaClient from '../../prisma';

interface ItemRequest {
  amount: number;
  order_id: string;
  product_id: string;
}

class AddItemsOrderService {
  async execute({ amount, order_id, product_id }: ItemRequest) {
    const item = await prismaClient.item.create({
      data: {
        amount,
        order_id: order_id,
        product_id: product_id,
      },
      select: {
        id: true,
        amount: true,
        order_id: true,
        product_id: true,
      },
    });

    return item;
  }
}

export { AddItemsOrderService };
