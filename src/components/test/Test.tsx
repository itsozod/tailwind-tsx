import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { ValidationSchema } from "./ValidationsSchema";

const categories = [
  {
    id: 1,
    name: "Инструкции",
  },
  {
    id: 2,
    name: "Контакты",
  },
  {
    id: 3,
    name: "Якду",
  },
  {
    id: 999,
    name: "Другое",
  },
];

const product = [
  {
    category_id: 1,
    name: "Ball",
  },
  {
    category_id: 2,
    name: "Pen",
  },
  {
    category_id: 3,
    name: "Pencil",
  },
  {
    category_id: 999,
    name: "Dog",
  },
];

const type = [
  {
    value: 1,
    label: "Value 1",
  },
  {
    value: 2,
    label: "Value 2",
  },
];

interface keyValue {
  [key: number]: string;
}

const typeValue: keyValue = {
  1: "Value 1",
  2: "Value 2",
};

export const Test = () => {
  const [data, setData] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      type_id: Number(""),
      type: "",
      full_name: "",
      name: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      setData((...prev) => [...prev, values]);
    },
  });

  console.log("Data", data);

  useEffect(() => {
    if (!formik.values.type) {
      formik.setFieldValue("type", 1);
      formik.setFieldValue("type_id", 1);
    }
  }, []);
  const [cat, setCat] = useState({});
  const [filter, setFilter] = useState<number | string>("");

  const getCategories = () => {
    return categories?.map((category) => {
      setCat((prev) => ({
        ...prev,
        [category?.id]: category?.name,
      }));
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const filtered = useMemo(() => {
    return filter
      ? product?.filter((prod) => prod?.category_id === filter)
      : product;
  }, [filter]);

  return (
    <>
      <Button onClick={() => setFilter("")}>All</Button>
      {categories?.map((categ) => {
        return (
          <Button onClick={() => setFilter(categ?.id)}>{categ?.name}</Button>
        );
      })}
      {filtered?.map((prod) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <div>{prod?.name}</div>
              <div>{cat[prod?.category_id]}</div>
            </div>
          </>
        );
      })}

      <Form onFinish={formik.handleSubmit} layout="vertical">
        {formik.values.type_id === 1 && (
          <Form.Item label="name">
            <Input
              status={formik.errors.name && formik.touched.name ? "error" : ""}
              {...formik.getFieldProps("name")}
            />
          </Form.Item>
        )}

        {formik.values.type_id === 2 && (
          <Form.Item label="Full name">
            <Input
              status={
                formik.errors.full_name && formik.touched.full_name
                  ? "error"
                  : ""
              }
              {...formik.getFieldProps("full_name")}
            />
          </Form.Item>
        )}

        <Form.Item label="Type">
          <Select
            value={formik.values.type}
            options={type}
            onChange={(value) => {
              formik.setFieldValue("type_id", value);
              formik.setFieldValue("type", typeValue[value]);
            }}
          />
        </Form.Item>
        <Button htmlType="submit" size="large" type="default">
          Submit
        </Button>
      </Form>
    </>
  );
};
