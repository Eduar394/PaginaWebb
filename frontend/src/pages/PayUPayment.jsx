const PayUPayment = () => {
  const formRef = useRef(null);

  const handlePay = () => {
    formRef.current.submit();
  };

  return (
    <div>
      <h2>Pagar con PayU</h2>
      <form
        ref={formRef}
        method="post"
        action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu"
      >
        <input name="merchantId" type="hidden" value="508029" />
        <input name="accountId" type="hidden" value="512321" />
        <input name="description" type="hidden" value="Compra ejemplo" />
        <input name="referenceCode" type="hidden" value="TEST_123456" />
        <input name="amount" type="hidden" value="10000" />
        <input name="tax" type="hidden" value="0" />
        <input name="taxReturnBase" type="hidden" value="0" />
        <input name="currency" type="hidden" value="COP" />
        <input name="signature" type="hidden" value="GENERADO_DESDE_BACKEND" />
        <input name="buyerEmail" type="hidden" value="cliente@email.com" />
        <input name="test" type="hidden" value="1" />
        <input name="responseUrl" type="hidden" value="http://localhost:5173/payment-success" />
        <input name="confirmationUrl" type="hidden" value="http://localhost:5000/api/payment/payu/confirm" />
        <button type="button" onClick={handlePay}>Pagar con PayU</button>
      </form>
    </div>
  );
};

export default PayUPayment;













