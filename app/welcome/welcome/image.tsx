import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from 'antd';
import type { RcFile } from "antd/es/upload";

const {Dragger} = Upload;
export default function ImageUpload() {

    const handleUpload = function(file:RcFile){
        const formData = new FormData()
        formData.append('file', file);
        fetch('http://localhost:3000', {
            method: 'POST',
            body: formData,
          })
            .then((res) => res.json()).catch((e)=>{
                console.log(e, "Error")
            })
    }
  return (
    <>
      <div className="grid py-100px grid-cols-4 gap-4">
        <div className="col-span-2">
          <Dragger name="file" multiple={true} onDrop={(e) => console.log(e, "EEE")} action={(file)=>{
            handleUpload(file);
            return ""
          }} method="POST">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>{" "}
            <p className="text-white">
              Click or drag file to this area to upload
            </p>
            <p className="text-white">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>

        <div>
          <Upload name="avatar" listType="picture-circle" showUploadList={true} action={(file)=>{
            handleUpload(file);
            return ""
          }}><button style={{ border: 0, background: 'none' }} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </button></Upload>
        </div>
      </div>
    </>
  );
}
