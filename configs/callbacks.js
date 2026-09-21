const callbacks = {
  onUpdate: async () => {
    const revalidateUrl = process.env.REVALIDATE_URL;
    if (!revalidateUrl) {
      return;
    }
    try {
      await fetch(revalidateUrl);
    } catch (e) {
      console.error('Failed to hit frontend revalidation endpoint:', e.message);
    }
  },
};

export default callbacks;
