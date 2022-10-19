import React from 'react';
import './Home.css';
import axios from 'axios';

import { Row, Col, Image, Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Please enter a valid email!',
    number: 'Please enter a valid number!',
  },
  number: {
    range: '${message} must be between ${min} and ${max}',
  },
};

function Home() {
  const onFinish = (values) => {
    console.log(values);
    // event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:5000/contact',
      data: values.user,
    }).then((response) => {
      if (response.data.status === 'sent') {
        alert('Message Sent');
      } else if (response.data.status === 'failed') {
        alert('Message Failed');
      }
    });
  };

  return (
    <div>
      <Row justify="center" className="home-section" align="middle" id="home">
        <Col span={24}>
          <div className="home-title-container">
            <h1 className="home-title">Phan Group</h1>
            <h2 className="home-subtitle">Sourcing &amp; FMCG Distribution</h2>
          </div>

          <div className="center">
            <a role="button" href="#services">
              <img alt="" src="arrow-down.png" style={{ width: '50px' }}></img>
            </a>
          </div>
        </Col>
      </Row>
      <Row justify="center" align="top" className="about-us">
        {/* <Col span={24}>
          <img src="HomeRow.png" style={{ width: '100vw' }}></img>
        </Col> */}
        <Col xs={24} sm={24} md={8}>
          <img src="Trophy.png" className="about-us-image"></img>
          <h3 className="about-us-h3">Reliable Suppliers</h3>
          <p style={{ width: '80%' }} className="about-us-p">
            We only work with suppliers who have been approved and vetted by our
            sourcing team, we do due diligence, which means a background check
            and a stringent merit-based verification process.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <img src="Chart.png" className="about-us-image"></img>
          <h3 className="about-us-h3">Competitive Prices</h3>
          <p style={{ width: '80%' }} className="about-us-p">
            We consistently gather all market data to promise the best prices.
            Our sourcing team negotiate pricing that is on average 30% better
            than your current supply.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <img src="Check.png" className="about-us-image"></img>
          <h3 className="about-us-h3">Quality Assurance</h3>
          <p style={{ width: '80%' }} className="about-us-p">
            We will personally do quality assurance, and also hire third party
            inspections for our clients making sure the factories and products
            in warehouses are legitimate.
          </p>
        </Col>
      </Row>
      <Row
        justify="center"
        align="top"
        className="about-us-section-1"
        id="about-us"
      >
        <Col span={24} className="FMCG">
          <div className="services-textbox-aboutus">
            <h2 className="services-h2" style={{ color: '#FFF' }}>
              About Us
            </h2>
            <p className="services-p" style={{ color: '#FFF' }}>
              PHAN GROUP was created for Vietnamese and overseas businesses to
              transact directly and globally every day.
            </p>
            <p className="services-p" style={{ color: '#FFF' }}>
              We believe that currently the best Vietnamese suppliers aren’t
              visible to most overseas based businesses. It is our mission to
              provide a clearly and purely value driven and transparent sourcing
              ecosystem to our clients.
            </p>
            <p className="services-p" style={{ color: '#FFF' }}>
              PHAN GROUP provides an end-to-end service for businesses across
              the world, from entrepreneurial startups to global corporations.
            </p>
            <p className="services-p" style={{ color: '#FFF' }}>
              <b>Solution for our clients: </b>Helping businesses to save time
              and be cost-effective by finding a reliable direct manufacturer or
              supplier in Vietnam. We provide a platform where we can help you
              find any type of goods or commodities, anywhere and regardless of
              industry.
            </p>
            <p className="services-p" style={{ color: '#FFF' }}>
              <b>Solution for manufacturers and overseas businesses:</b> Helping
              Vietnamese manufacturers to successfully enter oversea markets; as
              well as helping overseas businesses to enter the Vietnamese
              market.
            </p>
          </div>
        </Col>
      </Row>
      <Row justify="center" align="top" className="service-section" type="flux">
        {/* <Col span={24}>
          <h1 className="about-us-title">What We Do</h1>
        </Col> */}
        {/* <Col span={24}>
          <h1 className="services-title">Industries</h1>
        </Col> */}
        <Col sm={24} lg={12} id="services" className="pharmaceuticals">
          <div className="flip-card">
            <div className="flip-card-inner services-textbox-pharmaceuticals">
              <div className="flip-card-front">
                <h2 className="services-h2 flip-card-title-pharmaceuticals">
                  Pharmaceuticals
                </h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">Pharmaceuticals</h2>
                <p className="services-p">
                  PHAN GROUP works with a range of enterprise businesses to set
                  up and diversify their supply chain. We ensure that their
                  requirements are heard and are thoroughly understood, taking
                  all stakeholders into consideration. We help overseas
                  businesses remove the need for distributors, and ensure a
                  strong and protected relationship is built directly between
                  our client and the manufacturer. This ensures pricing,
                  quality, and consistency are maintained at all times.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={0}
          lg={12}
          className="service-col"
          style={{ overflow: 'hidden' }}
        >
          <img
            src="Pharmacy-1.jpg"
            style={{ width: '100%', objectFit: 'cover' }}
          ></img>
        </Col>
      </Row>
      <Row justify="center" align="top" className="service-section">
        <Col
          xs={0}
          lg={12}
          className="service-col"
          style={{ height: '30vw', overflow: 'hidden' }}
        >
          <img
            src="Supermarket.jpg"
            style={{ width: '100%', height: '100%' }}
          ></img>
        </Col>
        <Col sm={24} lg={12} className="FMCG">
          <div className="flip-card">
            <div className="flip-card-inner services-textbox">
              <div className="flip-card-front">
                <h2 className="services-h2 flip-card-title">
                  FMCG Distribution
                </h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">FMCG Distribution</h2>
                <p className="services-p">
                  Based in Czech Republic, with offices in Vietnam, we’re able
                  to use our global supply chain and shipping infrastructure to
                  streamline significant product sourcing at effective speed by
                  introducing our clients to our global distribution channels.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={12} className="PPE">
          <div className="flip-card">
            <div className="flip-card-inner services-textbox-vietnam">
              <div className="flip-card-front">
                <h2 className="services-h2 flip-card-title">
                  Helping Manufacturers Move Production to Vietnam
                </h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">
                  Helping Manufacturers Move Production to Vietnam{' '}
                </h2>
                <p className="services-p">
                  We are able to assist our clients in securing land, labour and
                  local investors when moving their manufacturing operations to
                  Vietnam and secure desired distribution networks. We are
                  transparent throughout this process to provide our clients
                  with the best desired options and outcome.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={0}
          lg={12}
          className="service-col"
          style={{ height: '30vw', overflow: 'hidden' }}
        >
          <img
            src="vietnam.jpg"
            // style={{ maxWidth: '100%', maxHeight: '100%' }}
            style={{ width: '100%' }}
          ></img>
        </Col>
        <Col
          xs={0}
          lg={12}
          className="service-col"
          style={{ height: '30vw', overflow: 'hidden' }}
        >
          <img
            src="sourcing.jpg"
            // style={{ maxWidth: '100%', maxHeight: '100%' }}
            style={{ width: '100%' }}
          ></img>
        </Col>
        <Col sm={24} lg={12} className="PPE">
          <div className="flip-card">
            <div className="flip-card-inner services-textbox-pharmaceuticals">
              <div className="flip-card-front">
                <h2 className="services-h2 flip-card-title-pharmaceuticals">
                  SOURCING OF RAW AND PROCESSED MATERIAL
                </h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">SOURCING OF MATERIAL</h2>
                <p className="services-p">
                  Having worked with numerous manufacturers we are able to
                  connect our clients directly with manufacturers and local
                  distribution leaders. At the end of the sourcing process, our
                  clients will receive a detailed list of fully vetted
                  manufacturers and distributors to ensure chosen suppliers
                  fulfill the clients needs and wants. These are not limited to
                  but include raw building materials, cement, timber, SPC
                  flooring, medium-density fibreboards, and geotextile.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        className="about-us-section"
        id="partners"
        align="middle"
        style={{ paddingBottom: '2rem' }}
      >
        <Col span={24} className="partner-container">
          <h1
            className="home-title"
            style={{
              // color: '#685641',
              color: '#cabcab',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '4rem',
            }}
          >
            Partners
          </h1>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-1.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-2.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-3.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-4.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-5.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-6.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-7.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        {/* <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-8.png" style={{ width: '100%' }}></img>
          </div>
        </Col> */}
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-9.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-10.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-11.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-12.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6} className="partner-container">
          <div
            style={{
              width: '60%',
              maxWidth: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            <img src="Logo-13.png" style={{ width: '100%' }}></img>
          </div>
        </Col>
      </Row>

      <Row
        justify="center"
        className="contact-section"
        align="middle"
        id="contact-us"
      >
        <Col span={12}>
          <h2 className="contact-subtitle">Contact Us!</h2>
          <div className="contact-form-div">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
              style={{ color: '#fff', width: '70vw', marginLeft: '-20vw' }}
            >
              <Form.Item
                style={{ color: 'white' }}
                name={['user', 'name']}
                label={<label style={{ color: '#cabcab' }}>Name</label>}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label={<label style={{ color: '#cabcab' }}>Your Email</label>}
                message="Email"
                rules={[
                  {
                    type: 'email',
                  },
                  { required: true },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'message']}
                label={<label style={{ color: '#cabcab' }}>Message</label>}
                rules={[{ required: true }]}
                message="Message"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>

      <Row justify="center" align="top" className="footer-section">
        <Col xs={24}>
          <p className="center">© Phan-Group s.r.o.</p>
        </Col>
        <Col xs={12}>
          <p className="center">Duhová 1294</p>
        </Col>
        <Col xs={12}>
          <p className="center">Company ID: 07636440</p>
        </Col>
        <Col xs={12}>
          <p className="center">252 42 Jesenice</p>
        </Col>
        <Col xs={12}>
          <p className="center">VAT Number: CZ07636440</p>
        </Col>
        <Col xs={12}>
          <p className="center">Česká Republika</p>
        </Col>
        <Col xs={12}>
          <p className="center">info@phan-group.com</p>
        </Col>
        <Col xs={24}>
          <p className="center" style={{ marginTop: '2vh' }}>
            The company is registered in the Commercial Register at the
            Municipal Court in Prague, Section C, File 304067.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
