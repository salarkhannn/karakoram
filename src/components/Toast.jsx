export default function Toast({ message, onClose }) {
    return (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-slideIn">
            {message}
        </div>
    );
}
