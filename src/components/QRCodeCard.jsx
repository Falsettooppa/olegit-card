import QRCode from "react-qr-code";

export default function QRCodeCard() {
  return (
    <div className="mt-6">
      <QRCode value="https://olegit.com.ng" size={100} />
      <p className="text-xs text-gray-400 mt-2">Scan to connect</p>
    </div>
  );
}
