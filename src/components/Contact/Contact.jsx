import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useState } from 'react';
import EditForm from '../EditForm/EditForm';
import css from './Contact.module.css';

function Contact({ id, name, number, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = updatedContact => {
    onEdit(updatedContact);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className={css.item}>
      {isEditing ? (
        <EditForm
          contact={{ id, name, number }}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <div className={css.box}>
            <p className={css.text}>
              <HiUser size={22} color="grey" />
              {name}
            </p>
            <p className={css.text}>
              <BsFillTelephoneFill size={22} color="grey" />
              {number}
            </p>
          </div>

          <div className={css.wrap}>
            <button className={css.btn} type="button" onClick={handleEdit}>
              Edit
            </button>

            <button className={css.btn} type="button" onClick={onDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
