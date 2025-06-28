import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";

const {RangePicker} = DatePicker

const {Option} = Select;
export default function FormDialog(){
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
    const [form] = Form.useForm();
    const variant = Form.useWatch("variant", form);
    return (
        <>

        <div className="py-10 bg-white h-screen">

            <Form
            form={form}
            variant={variant}
            onFinish={(E)=>{
              let result = form.getFieldsValue();
              console.log(result)
            }}
            >
                 <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
        <Input/>
      </Form.Item>

      <Form.Item label="Number" name="number" rules={[{ required: true, message: 'Please input!' }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="submit" > <Button value="submit" htmlType="submit">Submit</Button></Form.Item>

            </Form>
        </div>
        </>
    )
}