:set number
:set mouse=a
:set smartindent
:set expandtab
:set tabstop=4
:set shiftwidth=4
:set smarttab
:set softtabstop=4

call plug#begin()

Plug 'https://github.com/tomasiser/vim-code-dark'
Plug 'https://github.com/vim-airline/vim-airline'
Plug 'https://github.com/preservim/nerdtree'
Plug 'https://github.com/neoclide/coc.nvim', {'branch': 'release'}
Plug 'https://github.com/neoclide/coc-snippets'
Plug 'https://github.com/neoclide/coc-prettier'
Plug 'https://github.com/pangloss/vim-javascript'
Plug 'https://github.com/lukas-reineke/indent-blankline.nvim'
Plug 'https://github.com/neoclide/coc-pairs'

call plug#end()

colorscheme codedark

hi Normal guibg=NONE ctermbg=NONE
hi EndOfBuffer guibg=NONE ctermbg=NONE
highlight LineNr ctermbg=none
let g:airline#extensions#whitespace#enabled = 0

nnoremap <C-r> :NERDTreeFocus<CR>
nnoremap <C-t> :NERDTreeToggle<CR>

filetype indent off

au VimEnter *  NERDTree
