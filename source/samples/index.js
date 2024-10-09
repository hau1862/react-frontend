const dateSample = new Date(0);

export default {
	accountSample: { id: 0, username: "", password: "", fullName: "", role: "user", createdAt: dateSample, updatedAt: dateSample },
	productSample: { id: 0, name: "", description: "", createdAt: dateSample, updatedAt: dateSample },
	variantSample: { id: 0, productId: 0, name: "", imageUrl: "", price: 0, createdAt: dateSample, updatedAt: dateSample },
	cartItemSample: { accountId: 0, productId: 0, variantId: 0, quantity: 0 }
};
