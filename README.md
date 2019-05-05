# BÁO ĐIỆN TỬ TH-16 (web tĩnh)

## Preview online

[Deploy on Now.sh](https://bao-dien-tu.beohoang98.now.sh)

## Preview on localhost

```bash
npm install -g local-web-server
# then
ws --port=8080
```

or if you have `php`

```bash
php -S localhost:8080
```

then go to http://localhost:8080/

## Develop in localhost

1. **Requirement**

    - **Ruby**
    ```bash
    # Ubuntu
    sudo apt install ruby-dev
    ```

    - **Jekyll and Bundler**
    ```bash
    gem install jekyll bundler
    ```

2. **First Install**
```bash
bundle install
```

3. **Run**
```bash
bundle exec jekyll serve
```
