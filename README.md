# BiGR: Harnessing Binary Latent Codes for Image Generation and Improved Visual Representation Capabilities

[![Project Page](https://img.shields.io/badge/Webpage-0054a6?logo=Google%20chrome&logoColor=white)](https://haoosz.github.io/BiGR/)
[![arXiv](https://img.shields.io/badge/arXiv-2410.14672%20-b31b1b)](https://arxiv.org/abs/2410.14672)
[![Hugging Face Models](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-BiGR-blue)](https://huggingface.co/haoosz/BiGR)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/haoosz/BiGR/blob/main/run_BiGR.ipynb)
![License](https://img.shields.io/github/license/haoosz/ConceptExpress?color=lightgray)

This is the official PyTorch code for the paper:

[**BiGR: Harnessing Binary Latent Codes for Image Generation and Improved Visual Representation Capabilities**](https://arxiv.org/abs/2410.14672)  
[Shaozhe Hao](https://haoosz.github.io/)<sup>1</sup>, 
[Xuantong Liu](https://openreview.net/profile?id=~Xuantong_LIU1)<sup>2</sup>, 
[Xianbiao Qi](https://scholar.google.com.hk/citations?user=odjSydQAAAAJ&hl=en)<sup>3</sup>\*, 
[Shihao Zhao](https://shihaozhaozsh.github.io/)<sup>1</sup>, 
[Bojia Zi](https://zibojia.github.io/)<sup>4</sup>, 
[Rong Xiao](https://scholar.google.com/citations?user=Zb5wT08AAAAJ&hl=en)<sup>3</sup>, 
[Kai Han](https://www.kaihan.org/)<sup>1</sup>&dagger;, 
[Kwan-Yee K. Wong](https://i.cs.hku.hk/~kykwong/)<sup>1</sup>&dagger;  
<sup>1</sup>The University of Hong Kong &nbsp; <sup>2</sup>Hong Kong University of Science and Technology   
<sup>3</sup>Intellifusion &nbsp; <sup>4</sup>The Chinese University of Hong Kong  
(\*: Project lead; &dagger;: Corresponding authors)  
*ICLR 2025*

[[**Project page**](https://haoosz.github.io/BiGR/)] [[**arXiv**](https://arxiv.org/abs/2410.14672)] [[**Colab**](https://colab.research.google.com/github/haoosz/BiGR/blob/main/run_BiGR.ipynb)]

<p align="left">
    <img src='src/teaser.png' width="90%">
</p>

**TL;DR**: We introduce BiGR, a novel conditional image generation model using compact binary latent codes for generative training, focusing on enhancing both generation and representation capabilities.

## ⚙️ Setup
You can simply install the environment with the file `environment.yml` by:
```
conda env create -f environment.yml
conda activate BiGR
```

## 🔗 Download 
Please first download the [pretrained weights](https://huggingface.co/haoosz/BiGR) for tokenizers and BiGR models to run our tests.

### Binary Autoencoder
We train Binary Autoencoder (B-AE) by adapting the [official code](https://github.com/ZeWang95/BinaryLatentDiffusion) of [Binary Latent Diffusion](https://arxiv.org/abs/2304.04820). We provide pretrained weights for different configurations.

**256x256 resolution**

| B-AE  | Size  |  Checkpoint  |
| :---- | :---: | :----------: |
| d24   | 332M  | [download](https://huggingface.co/haoosz/BiGR/resolve/main/bae/bae_d24/binaryae_ema_1000000.th?download=true) |
| d32   | 332M  | [download](https://huggingface.co/haoosz/BiGR/resolve/main/bae/bae_d32/binaryae_ema_950000.th?download=true) |

**512x512 resolution**

| B-AE     | Size  |  Checkpoint  |
| :------- | :---: | :----------: |
| d32-512  | 315M  | [download](https://huggingface.co/haoosz/BiGR/resolve/main/bae/bae_d32_512/binaryae_ema_720000.th?download=true) |

### BiGR models ✨
We provide pretrained weights for BiGR models in various sizes.

**256x256 resolution**

| Model              | B-AE  | Size  |  Checkpoint |
| :----------------- | :---: | :---: | :---------: |
| BiGR-L-d24         |  d24  | 1.35G |  [download](https://huggingface.co/haoosz/BiGR/resolve/main/gpt/bigr_L_d24.pt?download=true)   |
| BiGR-XL-d24        |  d24  | 3.20G |  [download](https://huggingface.co/haoosz/BiGR/resolve/main/gpt/bigr_XL_d24.pt?download=true)   |
| BiGR-XXL-d24       |  d24  | 5.92G |  [download](https://huggingface.co/haoosz/BiGR/resolve/main/gpt/bigr_XXL_d24.pt?download=true)   |
| BiGR-XXL-d32       |  d32  | 5.92G |  [download](https://huggingface.co/haoosz/BiGR/resolve/main/gpt/bigr_XXL_d32.pt?download=true)   |

**512x512 resolution**

| Model              | B-AE        | Size  | Checkpoint |
| :----------------- | :---------: | :---: | :--------: |
| BiGR-L-d32-res512  | d32-res512  | 1.49G |  [download](https://huggingface.co/haoosz/BiGR/resolve/main/gpt/bigr_L_d32_512.pt?download=true)  |

## 🚀 Image generation
We provide the sample script for **256x256 image generation** in `script/sample.sh`.
```
bash script/sample.sh
```
Please specify the code dimension `$CODE`, your B-AE checkpoint path `$CKPT_BAE`, and your BiGR checkpoint path
`$CKPT_BIGR`.

You may also want to try different settings of the CFG scale `$CFG`, the number of sample iterations `$ITER`, and the gumbel temperature `$GUMBEL`. We recommend using small gumbel temperature for better visual quality (e.g., `GUMBEL=0`). You can increase gumbel temperature to enhance generation diversity.

You can generate **512x512 images** using `script/sample_512.sh`. Note that you need to specify the corresponding 512x512 tokenizers and models.
```
bash script/sample_512.sh
```

## 💡 Zero-shot applications
BiGR supports various zero-shot generalized applications, without the need for task-specific structural changes or parameter fine-tuning. 

You can easily download [testing images](https://drive.google.com/drive/folders/1GuKXolM90nRoNpg71g0ys4tv2ZCkAq9U?usp=sharing) and run our scripts to get started. Feel free to play with your own images.

### Inpainting & Outpainting
<p align="left">
    <img src='src/in_outpaint.png' width="90%">
</p>

```
bash script/app_inpaint.sh
```
```
bash script/app_outpaint.sh
```
You need to save the source image and the mask in the same folder, with the image as a `*.JPEG` file and the mask as a `*.png` file. 
You can then specify the source image path `$IMG`.

You can customize masks using this [gradio demo](gradio/README.md).

### Class-conditional editting
<p align="left">
    <img src='src/edit.png' width="90%">
</p>

```
bash script/app_edit.sh
```
In addition to the source image path `$IMG`, you also need to give a class index `$CLS` for editing.

### Class interpolation
<p align="left">
    <img src='src/interpolate.png' width="90%">
</p>

```
bash script/app_interpolate.sh
```
You need to specify two class indices `$CLS1` and `$CLS2`.

### Image enrichment
<p align="left">
    <img src='src/enrich.png' width="90%">
</p>

```
bash script/app_enrich.sh
```
You need to specify the source image path `$IMG`.

## 💻 Train
You can train BiGR yourself by running:
```
bash script/train.sh
```
You need to specify the ImageNet-1K dataset path `--data-path`. 

We train L/XL-sized models using 8 A800 GPUs and XXL-sized models using 32 A800 GPUs on 4 nodes.

## 💐 Acknowledgement
This project builds on [Diffusion Transformer](https://github.com/facebookresearch/DiT), [Binary Latent Diffusion](https://github.com/ZeWang95/BinaryLatentDiffusion), and [LlamaGen](https://github.com/FoundationVision/LlamaGen). We thank these great works!

## 📖 Citation
If you use this code in your research, please consider citing our paper:
```
@misc{hao2024bigr,
    title={Bi{GR}: Harnessing Binary Latent Codes for Image Generation and Improved Visual Representation Capabilities}, 
    author={Shaozhe Hao and Xuantong Liu and Xianbiao Qi and Shihao Zhao and Bojia Zi and Rong Xiao and Kai Han and Kwan-Yee~K. Wong},
    year={2024},
}
```