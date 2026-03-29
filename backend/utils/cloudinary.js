import cloudinary from '../config/cloudinary.js';

/**
 * Upload an image to Cloudinary from a local file path.
 * @param {string} localFilePath - The absolute or relative path to the local image.
 * @param {string} folder - The folder in Cloudinary where the image should be saved.
 * @returns {Promise<string>} - The public secure URL of the uploaded image.
 */
export const uploadToCloudinary = async (localFilePath, folder = 'cheeznest_products') => {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: folder,
      use_filename: true,
      unique_filename: true,
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    throw error;
  }
};
