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

interface PriceDataProps {
  product: {
    basePrice: number;
    discountThreshold: number;
    discountRate: number;
  };
  quantity: number;
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
  const priceData = calculatePricingData({ product, quantity });
  return applyShipping({
    priceData,
    shippingMethod,
  });
};

function calculatePricingData({ product, quantity }: PriceDataProps) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return { basePrice: basePrice, quantity: quantity, discount: discount };
}

const applyShipping = ({ priceData, shippingMethod }: ShipppingProps) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
};

const index = () => {
  return priceOrder(mockData);
};

export default index;
