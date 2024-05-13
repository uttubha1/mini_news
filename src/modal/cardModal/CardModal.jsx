import React, { useState } from 'react'
import { Modal, Button } from 'antd';

export const CardModal = ({open, setOpen, item}) => {
    const [loading, setLoading] = useState(false);
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
        }, 3000);
      };
  return (
    <Modal
        open={open}
        title={item?.title || ''}
        onCancel={() => setOpen(false)}
        footer={[
            <Button key="back" onClick={() => setOpen(false)}>
                Close
            </Button>,
            <Button
                key="link"
                href={`https://www.google.com/search?q=${encodeURIComponent(item?.description)}`}
                type="primary"
                loading={loading}
                onClick={handleOk}
                target="_blank"
            >
                Search on Google
            </Button>,
        ]}
    >
        <div>
            <img src={item?.cover} alt="Cover" style={{ maxWidth: '100%' }} />
        </div>
        <div>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
        </div>
      </Modal>
  )
}
