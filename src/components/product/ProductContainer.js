import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import {categories, emptyProduct, products} from "../../globalData/initialData";
import ProductList from "./ProductList";
import ProductInfo from "./ProductInfo";

const ProductContainer = () => {
    const [items, setItems] = useState(products);
    const [selectedItem, setSelectedItem] = useState({});

    const setEditMode = id => {
        const temp = [...items];
        const index = temp.findIndex(q => q.id === id);
        temp.forEach(q => q.editMode = false);
        temp[index].editMode = true;
        setItems([...temp]);
        setSelectedItem(temp[index]);
    }

    const removeItem = id => {
        setItems([...items.filter(q => q.id !== parseInt(id))])
    }

    const saveItem = item => {
        const category = categories.find(q => q.id === parseInt(item.categoryID));
        item = {...item, categoryName: category.title, editMode: false};
        if (item.id !== "") {
            // Edit selected item
            const temp = [...items];
            const index = temp.findIndex(q => q.id == item.id);
            temp[index] = item;
            setItems([...temp]);
        } else {
            // Add new item
            item.id = uuidv4();
            const temp = [...items, item];
            setItems([...temp]);
        }
        setSelectedItem({});
        setSelectedItem(emptyProduct);
    }

    return (
        <>
            <div className="card">
                <div className="card-header">مدیریت محصولات</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-7">
                            <ProductList data={items} editMode={setEditMode} remove={removeItem}/>
                        </div>
                        <div className="col-md-5">
                            <ProductInfo categories={categories} product={selectedItem} save={saveItem}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductContainer;