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
  priceData: {
    basePrice: number;
    quantity: number;
    discount: number;
  };
  shippingMethod: {
    discountThreshold: number;
    discountedFee: number;
    feePerCase: number;
  };
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
  const priceData = {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount,
  };
  const price = applyShipping({
    priceData,
    shippingMethod,
  });
  return price;
};

const applyShipping = ({ priceData, shippingMethod }: ShipppingProps) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
};

const index = () => {
  return priceOrder(mockData);
};

export default index;
