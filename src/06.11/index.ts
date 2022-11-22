interface Props {
  product: {
    basePrice: number;
    discountThreshold: number;
    discountRate: number;
  };
  quantity: number;
  shippingMethod: {
    discountThreshold: number;
    discountedFee: number;
    feePerCase: number;
  };
}

interface ShipppingProps {
  basePrice: number;
  shippingMethod: {
    discountThreshold: number;
    discountedFee: number;
    feePerCase: number;
  };
  quantity: number;
  discount: number;
}

const mockData = {
  product: {
    basePrice: 15000,
    discountThreshold: 1000,
    discountRate: 70,
  },
  quantity: 500,
  shippingMethod: {
    discountThreshold: 200,
    discountedFee: 10,
    feePerCase: 50,
  },
};

const priceOrder = ({ product, quantity, shippingMethod }: Props) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const price = applyShipping({
    basePrice,
    shippingMethod,
    quantity,
    discount,
  });
  return price;
};

const applyShipping = ({
  basePrice,
  shippingMethod,
  quantity,
  discount,
}: ShipppingProps) => {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
};

const index = () => {
  return priceOrder(mockData);
};

export default index;
