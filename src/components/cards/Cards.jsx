import React, { useState, useEffect } from 'react';
import { Card, Skeleton, Row, Col } from 'antd';
import { CardModal } from '../../modal/cardModal/CardModal';
import { getNewsById } from '../../services/api';

const { Meta } = Card;

export const Cards = ({ apiDummyData }) => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating delay of 2 seconds
  }, []);

  const handleCardClick = async (item) => {
    try {
      const res = await getNewsById(item.id);
      setSelectedItem(res);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {loading ? (
        // Show loading state
        Array.from({ length: 3 }).map((_, index) => (
          <Col key={index} span={8}>
            <Card
              hoverable
              style={{ margin: '16px' }}
              loading={true}
            >
              <Skeleton loading={true} active>
                <Meta title="Loading" description="Loading..." />
              </Skeleton>
            </Card>
          </Col>
        ))
      ) : (
        // Show cards with data in grid format
        <Row gutter={[16, 16]}>
          {apiDummyData.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ margin: '16px' }}
                cover={<img alt="example" src={item.cover} style={{ height: 200, objectFit: 'cover' }} />}
                onClick={() => handleCardClick(item)}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <CardModal open={open} setOpen={setOpen} item={selectedItem} />
    </>
  );
};
