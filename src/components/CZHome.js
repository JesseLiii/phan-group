import React from 'react';
import './Home.css';

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

function CZHome() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Row justify="center" className="home-section" align="middle" id="home">
        <Col span={24}>
          <div className="home-title-container" id="home">
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
      <Row justify="center" align="top" className="about-us" id="about-us">
        <Col xs={24} sm={24} md={8}>
          <img src="Trophy.png" className="about-us-image"></img>
          <h3 className="about-us-h3">Spolehliví dodavatelé</h3>
          <p style={{ width: '80%' }} className="about-us-p">
            Důkladně kontrolujeme a spojujeme Vás pouze s dodavateli, kteří jsou
            trvale excelentní.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <img src="Chart.png" className="about-us-image"></img>
          <h3 className="about-us-h3">Bezkonkurenční ceny</h3>
          <p style={{ width: '80%' }} className="about-us-p">
            Důkladně analyzujeme všechna tržní data, abychom zajistili ty
            nejlepší ceny.
          </p>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <img src="Check.png" className="about-us-image"></img>
          <h3
            className="about-us-h3"
            style={{ paddingLeft: '1.3em', paddingRight: '1.3em' }}
          >
            Zaručená kvalita
          </h3>
          <p style={{ width: '80%' }} className="about-us-p">
            Kvalita našich produktů a služeb ověřena našimi opakovanými
            zákazníky.
          </p>
        </Col>
      </Row>
      <Row justify="center" align="top" className="service-section">
        <Col sm={24} lg={12} id="services" className="pharmaceuticals">
          <div className="flip-card">
            <div className="flip-card-inner services-textbox">
              <div className="flip-card-front">
                <h2 className="services-h2 flip-card-title">Léčiva</h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">Léčiva</h2>
                <p className="services-p">
                  Díky naší rozsáhlé distribuční síti nemocnic a lékáren po
                  celém Vietnamu, aktivně hledáme výrobce léčiv se zájmem o
                  expanzi na rozvíjející se trh.
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
                <h2 className="services-h2 flip-card-title">Spotřební zboží</h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">Spotřební zboží</h2>
                <p className="services-p">
                  Specializujeme se v distribuci spotřebního zboží, klademe
                  důraz na kvalitu, jistotu i účelný servis.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={12} className="PPE">
          <div className="flip-card">
            <div className="flip-card-inner services-textbox">
              <div className="flip-card-front">
                <h2 className="services-h2 flip-card-title">
                  Pomáháme manufakturám s přesunem výroby do Vietnamu
                </h2>
              </div>
              <div className="flip-card-back">
                <h2 className="services-h2">
                  Pomáháme manufakturám s přesunem výroby do Vietnamu
                </h2>
                <p className="services-p">
                  Při přesunu výrobních operací do Vietnamu naším klientům
                  pomáháme se zajištěním pozemků, pracovní síly ale i s
                  vyhledáním místních investorů.
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
        {/* <Col sm={24} lg={12} className="PPE">
          <div className="services-textbox">
            <h2 className="services-h2">Osobní ochranné prostředky</h2>
            <p className="services-p">
              Postaráme se o zajištění zboží nejvyšší kvality, nejlepší ceny a
              požadované certifikace z Asie do Evropy.
            </p>
          </div>
        </Col> */}
        {/* <Col
          xs={0}
          lg={12}
          className="service-col"
          style={{ height: '30vw', overflow: 'hidden' }}
        >
          <img
            src="PPE-2.jpg"
            // style={{ maxWidth: '100%', maxHeight: '100%' }}
            style={{ width: '100%' }}
          ></img>
        </Col> */}
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
              color: '#685641',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '3.5rem',
            }}
          >
            Partneři
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
          <h2 className="contact-subtitle">Kontaktujte nás!</h2>
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
                label={<label style={{ color: '#cabcab' }}>Jméno</label>}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label={<label style={{ color: '#cabcab' }}>E-mail</label>}
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
                label={<label style={{ color: '#cabcab' }}>Zpráva</label>}
                rules={[{ required: true }]}
                message="Message"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Odeslat
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
          <p className="center">IČO: 07636440</p>
        </Col>
        <Col xs={12}>
          <p className="center">252 42 Jesenice</p>
        </Col>
        <Col xs={12}>
          <p className="center">DIČ: CZ07636440</p>
        </Col>
        <Col xs={12}>
          <p className="center">Czech republic</p>
        </Col>
        <Col xs={12}>
          <p className="center">info@phan-group.com</p>
        </Col>
        <Col xs={24}>
          <p className="center" style={{ marginTop: '2vh', fontSize: '0.9em' }}>
            Společnost je zapsána v obchodním rejstříku vedeném Městským soudem
            v Praze, oddíl C, vložka 304067.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default CZHome;
