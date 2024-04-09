import React, { useEffect } from "react";
import { Button, Popconfirm, Table } from "antd";
import AdminDashBoardModal from "./AdminDashBoardModal";
import { modalOpenAtom } from "../state-machine/models/common";
import { useAtom } from "jotai";
import { getProductsAtom } from "../state-machine/services/adminproduct/getProdcuct";
import { useNavigate } from "react-router-dom";
import {
    productDescriptionAtom,
    productIdAtom,
    productNameAtom,
    productPriceAtom,
    productsAtom,
} from "../state-machine/models/product";
import { deleteProductFunction } from "../state-machine/services/adminproduct/deleteProduct";

const AdminDashboardTable = () => {
    const [, setName] = useAtom(productNameAtom);
    const [, setPrice] = useAtom(productPriceAtom);
    const [, setDescription] = useAtom(productDescriptionAtom);
    const [, setProductId] = useAtom(productIdAtom);
    const [dataSource, setDataSource] = useAtom(productsAtom);
    const [isModalOpen, setIsModalOpen] = useAtom(modalOpenAtom);
    const [, getProduct] = useAtom(getProductsAtom);
    const [, deleteProduct] = useAtom(deleteProductFunction);
    const navigate = useNavigate();
    // productfetch
    useEffect(() => {
        getProduct();
    }, []);

    /**This function is for add */
    const handleAdd = () => {
        setIsModalOpen(true);
        setName("");
        setPrice("");
        setDescription("");
        setProductId(undefined);
    };

    const handleDelete = async (_id) => {
        await deleteProduct({ _id });
        await getProduct();
    };

    const editHandller = (product) => {
        const { _id, name, price, description } = product;
        setName(name);
        setPrice(price);
        setDescription(description);
        setProductId(_id);
        setIsModalOpen(true);
    };

    const gotoOrder = () => [navigate("/order")];
    const defaultColumns = [
        {
            title: "Name",
            dataIndex: "name",
            width: "15%",
            editable: true,
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Descripition",
            dataIndex: "description",
        },
        {
            title: "Update",
            width: "10%",
            dataIndex: "update",
            render: (_, record) => (
                <>
                    <Button type="primary" onClick={() => editHandller(record)}>
                        Edit
                    </Button>
                </>
            ),
        },
        {
            title: "Delete",
            dataIndex: "delete",
            width: "10%",
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record?._id)}>
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: "red",
                                borderColor: "red",
                            }}>
                            Delete
                        </Button>
                    </Popconfirm>
                ) : null,
        },
    ];

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 20px",
                }}>
                <Button
                    onClick={handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 5,
                        marginTop: 18,
                    }}>
                    Add Product
                </Button>
                <Button
                    onClick={gotoOrder}
                    type="primary"
                    style={{
                        marginBottom: 5,
                        marginTop: 18,
                        backgroundColor: "gray",
                        borderColor: "gray",
                    }}>
                    Go to orders
                </Button>
            </div>
            <Table
                style={{ margin: 10 }}
                bordered
                dataSource={dataSource}
                columns={defaultColumns}
            />
            <AdminDashBoardModal visible={isModalOpen} />
        </div>
    );
};
export default AdminDashboardTable;
