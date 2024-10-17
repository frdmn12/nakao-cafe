import { API_URL } from "../constant";

type TokenProps = {
  token: string;
};

export const fetchProtectedData = async ({ token }: TokenProps) => {
  try {
    const response = await fetch(`${API_URL}/api/protected-route`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
