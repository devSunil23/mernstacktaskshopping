import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";
import { useAtom } from "jotai";
import { addProductFunction } from "../state-machine/services/adminproduct/addProduct";
import { loaderAtom, modalOpenAtom } from "../state-machine/models/common";
import {
    productDescriptionAtom,
    productIdAtom,
    productNameAtom,
    productPriceAtom,
} from "../state-machine/models/product";
import { getProductsAtom } from "../state-machine/services/adminproduct/getProdcuct";
import { updateProductFunction } from "../state-machine/services/adminproduct/updateProduct";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const AdminDashboardTable = ({ onSave }) => {
    const [loader] = useAtom(loaderAtom);
    const [name, setName] = useAtom(productNameAtom);
    const [price, setPrice] = useAtom(productPriceAtom);
    const [description, setDescription] = useAtom(productDescriptionAtom);
    const [productId] = useAtom(productIdAtom);
    const [, getProduct] = useAtom(getProductsAtom);
    const [isModalOpen, setIsModalOpen] = useAtom(modalOpenAtom);
    const [, saveProduct] = useAtom(addProductFunction);
    const [, updateProduct] = useAtom(updateProductFunction);

    //save product function
    const handleSave = async () => {
        // Call onSave callback with the product data
        if (productId) {
            await updateProduct({ name, price, description, productId });
        } else {
            await saveProduct({ name, price, description });
        }

        await getProduct();
        // Clear input fields
        setName("");
        setPrice("");
        setDescription("");
        setIsModalOpen(false);
    };

    //on cancel
    const onCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Modal
            visible={isModalOpen}
            title={`${productId ? "Update" : "Add"} Product`}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={handleSave}>
                    {loader ? (
                        <Spin
                            indicator={
                                <LoadingOutlined
                                    style={{
                                        fontSize: 24,
                                    }}
                                    spin
                                />
                            }
                        />
                    ) : productId ? (
                        "Update"
                    ) : (
                        "Save"
                    )}
                </Button>,
            ]}>
            <Form layout="vertical">
                <Form.Item label="Name">
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Price">
                    <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input.TextArea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AdminDashboardTable;
