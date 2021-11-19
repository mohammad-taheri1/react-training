import React from 'react';

const ProductList = ({data, editMode, remove}) => {
    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>کد</th>
                <th>عنوان</th>
                <th>گروه</th>
                <th>قیمت</th>
                <th>مدیریت</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item =>
                <tr className={item.editMode ? 'selected-row' : ''} key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.price}</td>
                    <td>
                        <button className="btn btn-warning btn-sm mx-lg-2" onClick={() => editMode(item.id)}>ویرایش</button>
                        <button className="btn btn-danger btn-sm mx-lg-2" onClick={() => remove(item.id)}>حذف</button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default ProductList;