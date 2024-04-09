import React, { useEffect } from "react";
import { Table } from "antd";
import { useAtom } from "jotai";
import { getOrdersServices } from "../state-machine/services/payment/getOrders";
import { ordersAtom } from "../state-machine/models/payment";
import { Button } from "antd";
const AdminOrdersTable = () => {
    const [dataSource] = useAtom(ordersAtom);
    const [, getOrders] = useAtom(getOrdersServices);

    // orders fetch
    useEffect(() => {
        getOrders();
    }, []);

    const formatIndianPrice = (price) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(price); // Format price to Indian currency
    };

    const defaultColumns = [
        {
            title: "Order Id",
            dataIndex: "orderId",
            width: "8%",
        },
        {
            title: "Name",
            dataIndex: "name",
            width: "10%",
        },
        {
            title: "Mob. NO",
            dataIndex: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
        {
            title: "Total Price",
            dataIndex: "totalPrice",
            width: "10%",
            render: (price) => formatIndianPrice(price), // Format price
        },
        {
            title: "Products",
            dataIndex: "products",
            render: (products) => (
                <ul>
                    {products.map((product, index) => (
                        <span key={index}>
                            <span style={{ color: "#124076" }}>
                                {index + 1}.
                            </span>{" "}
                            <strong style={{ color: "#5E1675" }}>Name:</strong>{" "}
                            {product.name},
                            <strong style={{ color: "#FF407D" }}>
                                {" "}
                                Price:
                            </strong>{" "}
                            {product.price},
                            <strong style={{ color: "#337357" }}>
                                {" "}
                                Quantity:
                            </strong>{" "}
                            {product.quantity},<span> </span>
                        </span>
                    ))}
                </ul>
            ),
        },
        {
            title: "Order Date",
            dataIndex: "createdAt",
            width: "10%",
        },
        {
            title: "Action",
            width: "5%",
            dataIndex: "update",
            render: (_, record) => (
                <>
                    <Button type="primary">Order proceed</Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <Table
                style={{ margin: 10 }}
                bordered
                dataSource={dataSource}
                columns={defaultColumns}
            />
        </div>
    );
};
export default AdminOrdersTable;
