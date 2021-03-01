
### Examples

```jsx
import { Button, ModalHeader, ModalBody, ModalFooter } from '@ORIS/ui';

const MyModal = (props) => {
    let modal = React.createRef();

    const showModal = () => modal.current.show();

    return (
        <>
            <Modal
                ref={modal}
                keyboard={true}
                backdrop="static"
                className="modal-dialog-centered modal-lg my-super-awesome-wrapper-class"
            >
                <ModalHeader hasCloseButton={true}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    Your content goes here
                </ModalBody>
                <ModalFooter>
                    Your footer content here
                </ModalFooter>
            </Modal>

            <Button theme="primary" onClick={showModal}>
                Show Modal
            </Button>
        </>
    );
};

<MyModal />
```
