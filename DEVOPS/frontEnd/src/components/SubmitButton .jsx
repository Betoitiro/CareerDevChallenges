// SubmitButton.js
const SubmitButton = ({ loading, value }) => {
    return (
      <input
        type="submit"
        value={loading ? "Aguarde..." : value}
        disabled={loading}
      />
    );
  };
  
  export default SubmitButton;
  