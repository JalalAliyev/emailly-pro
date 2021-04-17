import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './recipient-list.style.scss';

const RecipientList = () => {
  const [rec, setRec] = useState([]);
  const recipients = useSelector((state) => state.recipients.recipients);
  const recID = useParams().recipientId;
  useEffect(() => {
    if (recipients) {
      const recipient = recipients.find((rec) => rec._id === recID).recipients;
      setRec(recipient);
    }
  }, [rec, recID, recipients]);
  return (
    <div className="recipient-list">
      {rec.map((r) => (
        <div className="recipient-list_item">
          <p>{r.email}</p>
          <small>responded: {r.responded ? 'Yes' : 'Not yet'}</small>
        </div>
      ))}
    </div>
  );
};

export default RecipientList;
