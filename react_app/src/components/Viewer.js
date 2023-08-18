import { Button, Card, Divider, Empty, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function Viewer() {
  const [url, setUrl] = useState(null);

  const handleFileChange = (file) => {
    console.log("file ===", file);
    const fileUrl = URL.createObjectURL(file);
    setUrl(fileUrl);
  };


  const docs = [
    {
      uri: url != null && url,
    },
  ];

  return (
    <>
      <Card>
        <div style={{display:"flex"}}>
        <Upload
          beforeUpload={(file) => {
            handleFileChange(file);
            return false; //prevent default upload behavior
          }}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Choose File to View</Button>
        </Upload>
        <Button
          onClick={() => {
            setUrl(null);

          }}
        >
          Clear
        </Button>
        </div>
        <Divider />
        <Card style={{ margin: "0 15rem", height: "50rem" }}>
          {url != null ? (
            <DocViewer
              documents={docs}
              pluginRenderers={DocViewerRenderers}
              style={{ height: "50rem" }}
              config={{
                header: { disableHeader: true},
              }}
            />
          ) : (
            <Empty description="No file added" />
          )}
        </Card>
      </Card>
    </>
  );
}

export default Viewer;
