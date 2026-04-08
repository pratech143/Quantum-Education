import os
import requests

# List of image URLs
urls = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBozvCK7shlf3IdhedyimKh1Ceu5_xyCINsF9wcOlX9z5MWkwXPJJIt298bpMcfdloub7Euw3AlQh7eQAr3hpB4eC2cBAaqTvzvrYJqorJFxME0IpoqnyB4iIIbmPxKNA19IDwnl3qqzF1av_hVpc6UDO95DBvXUMjDgXsqHO_3cRuwMhh-4jn6QmMRGGr3OpUkVK1VWE-7A_1_Cl1s-PacLyucsd2JetAOO3PpIm5nQFYRcu6rz1PzXHeaMc6QWgmULyv2xOR402Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8YrbQteV8vZR81ErevNjvFxwUBh19WQOIBC6TOJJdZJtatXzKO6IdClQR0IOabnCeS6XUY7QsDzkGuMznQnqBbIejFb3FA1L_QW8IRos6cdqU8NIIZoo6ZTYBfYLMLdzwfgqF78SiGIUvs7KssHWD1TAUQCqYxAuVuYU1cNg2dXlig8aZqmrKrOGNDqSrNy9Gitsx1JE6vEz4gEBH5PqPccHHoR0DRbwkEAwDNv8xYCvbtkTLqFuro7vdVYj2wU-xZB_bRKV96Jw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB8gJ8Mm8kPO-fNUjCMKx7NysqFMurfv_u9vdo_t0Cp0x72rTU9thHby2URAypo4N9zs3bCENId9OhPncRXBdsnQgJCOd_B18rBi8gBcQqn4Lg1bIFs5L5ReaXf2csY9P755AVVOXhkaG_98MKkIeT4LCCnqnjhhwokf7I4ynBxlX5KW-h16x8A1YCW6QP6N2h1fycmROxJZPjfmBj9yHa7wvniSsu6-4_b9xfcQqEgmJZ43IAgu7uvoY_OZ7HH9sepEIhFzGxq7B8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDVqNcjocVzrML2MrtB_4qU0Vcnb6EskujdaYaUD6cQ6n47D5jXepQ48y4d-WcfB-gahLXUZOHx5qtz-LylhU6o6o2jHVK67HNdzulh7Q94LyX_qiANIMDgEmcbYutA4bDAnu-2E2helyyrc5fAtomhLP_4IekgspzzG-cQitIHQ9EVn90klKTtO0HnLsEGBRwW0O4cv9u2kjVMWd4KLb7JdVPdxJeM0odhH-eIvIY8ot3ZY_tFqCNM29t-t-LngkmdC9cjgbY7f6U",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBisTtoR4la6rMpNq7oBZIJKp7bPhDG63XJRpJAhvpdqqKVilZq8UFJ9Y3Tlk-494Up2A3B_QI1DCOCDoRx0GM6QIopA-Rr0N0k_TWgec5ihRYeZ9mYBHe7XpODTXyMeX8FAUoElEiSIsNWEe9FdkiCBWmKK90fngP8rSky9fOX_QYnqtQu4WVFUi8pkaDUFbJ8No_ecuSNOAuKWsOI6iTzti0sx8pPJlPXu4byxWOBGz8VfpksyYf_WjMk4ExUl_NbtT-taw-gc0c",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7gbKN_cVKQUIILfsc1Z1_ZEdc73rRXbUuPg8LXK7QhhbLRvNiLXEZ6Xtrm282meFwgseABrxelO_n4nmyp7_gqq09_DZPS0HpLn9pTE-AcH6i2cNCzhRLPm_qVRN2F4OCLUXNUPU_y3Eptg5wUMRIpFwxN1Ma5LRa2sMIPyT6oz5a4jU2gz4hiWzL8frglW6fv8VG0lt2RaVl5-nAaTwS-Cd_UVwD1_2yCODr4j4Qe50pK5fGUURclgVcEKMXrVT6U-4PiBra6nw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_5EetoeR0nwI0sZEOJhUXAz8JWqLQJYuBU1fGUz4BAAvENlJpYJ_fGLm3-cldgFvDK4DAkPD6JeJVNhAJLLy-KguYWvwdOysT1KzGx2xkytDuxdDaOWb2EMgUmQDCJ9fDtzGCd2nOp5ZPQ-kA1ubXYDA7nLz0beFqs6x0o53umt7xN_OjzUeEwK90t0UMdvEGpkQX4743lbjMNOF2RctjX-iUyRpp5XEAQNyUOh7NhBADMtaKF_KBB3Gg0hHt6CLgF41AEh-qGQY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDP6muWPV4yn8hJwqYU1D1aDGgyirIFW7zCv-nsWrLhQnmJ7pbMFIyx3A6MaWkQUMObLVs5GSIjmOt4jF76DsQBNNIBKxAgvgCS8J1ykI4gmBqarzCjUODJBStJMqufs0ejHm3RlvIFc744YvlVa0R0-cHgSikj2h2PbbSRi0-U_zwZNb7YWOBNTKNGlp-rOX96AOpIZstJ__xvJ22Ly4s7lFH-qgygQRBF1_LKNCkEzbjNdZX7lac-x1Ew7vk_aD_yfBuXcG_n9Y0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxG9cQVDJBgcE66GnmMvwBKdlIR533yR1SnWAv_jNhC4BeMPpp1da91VP1uCSqBrq0Es6qVkI4tIar0wUry6-gQQxYeZfxg80LtJiPOlrSb6ZOWKrtEUfq85peZZ1uI09yDU7yhXnhtN7MiJUuF5sHYnkMNn_BoGAif5PV2RLBcX6dD-zZO4QGoiKsU8Qf7Of7CoLGYS7wNLBXOL9P9QUzevxhS9LNVlZRmHXNRClYI5CspvP1rogdVOnPiT4rLl9oO2HpjiotCxg"
]

# Create folder
folder = "downloaded_images"
os.makedirs(folder, exist_ok=True)

# Download images
for i, url in enumerate(urls):
    try:
        response = requests.get(url)
        file_path = os.path.join(folder, f"image_{i+1}.jpg")
        with open(file_path, "wb") as f:
            f.write(response.content)
        print(f"Downloaded: {file_path}")
    except Exception as e:
        print(f"Failed: {url}")

print("Done!")