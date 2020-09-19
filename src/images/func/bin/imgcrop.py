from PIL import Image  # Use Pillow

# Crop the matrix screenshots, cropping only the matrix view
# Image should be 470x95
for ch in ("c", "lfe", "lr", "lr_ø", "s", "sb", "upmix"):
    infile = f"matrix_8_{ch}.png"
    outfile = f"out/matrix_8_{ch}.png"
    with Image.open(infile) as im:

        crop = im.crop((47, 160, 517, 255))
        print(infile, im.size, crop.size, crop.mode, outfile)
        crop.save(outfile, "PNG")

        im.save(infile + "2", "PNG")


# Crop the panner screenshots, cropping only the pan circle
# Dimension should be 468x468 which is the same as the gifs
for ch in (
    "2",
    "3",
    "3_c",
    "3_lcr_mid",
    "3_lr",
    "3_lr_mid",
    "3_uses",
    "4",
    "6",
    "8",
    "8_crossbar",
):
    infile = f"panner_{ch}.png"
    outfile = f"out/panner_{ch}.png"
    with Image.open(infile) as im:

        crop = im.crop((43, 156, 511, 624))
        print(infile, im.size, crop.size, crop.mode, outfile)
        crop.save(outfile, "PNG")
