
const Modal = ({ setModalIsOpen, children }) => {
    return (
        <div
            style={{ backgroundColor: 'rgba(0, 0, 0, .80)', backdropFilter: 'blur(calc(2px/3))' }}
            className='flex justify-center items-center w-screen h-screen fixed left-0 top-0 z-40'
            onClick={() => setModalIsOpen(false)}
        >
            <div className='flex justify-center' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal
