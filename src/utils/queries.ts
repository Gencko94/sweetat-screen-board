import axios from 'axios';

export const getData = async () => {
  const url = 'https://sweetat.co/public/api/get-orders';
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N3ZWV0YXQuY28vcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTYxNDgwMjU3NywibmJmIjoxNjE0ODAyNTc3LCJqdGkiOiJSb2l4WGFhOU9EeEFGbjJKIiwic3ViIjoxMSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.S665ixDswqo2TT8P_YE4Unq-zUPv1xAg7wg0fR2d8I4';
  const res = await axios.post(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
