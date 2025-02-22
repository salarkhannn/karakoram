export default function Toast({ message, onClose }) {
    return (
        <div className="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-2 animate-slideIn font-['Neue'] z-[100] text-[16px]">
            {message}
        </div>
    );
}
